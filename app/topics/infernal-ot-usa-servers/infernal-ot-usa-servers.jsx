import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-usa-servers');
}

export default function InfernalOtUsaServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-usa-servers" />;
}
