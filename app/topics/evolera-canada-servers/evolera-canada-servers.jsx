import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-canada-servers');
}

export default function EvoleraCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-canada-servers" />;
}
