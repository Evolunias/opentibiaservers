import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-poland-server');
}

export default function InfernalOtPolandServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-poland-server" />;
}
