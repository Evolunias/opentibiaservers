import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-europe');
}

export default function EvoleraRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-europe" />;
}
