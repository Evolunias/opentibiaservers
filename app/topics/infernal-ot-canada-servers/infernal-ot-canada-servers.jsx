import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-canada-servers');
}

export default function InfernalOtCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-canada-servers" />;
}
