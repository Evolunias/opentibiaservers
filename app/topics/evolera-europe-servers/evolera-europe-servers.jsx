import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-europe-servers');
}

export default function EvoleraEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-europe-servers" />;
}
