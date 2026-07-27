import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-poland-servers');
}

export default function InfernalOtPolandServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-poland-servers" />;
}
