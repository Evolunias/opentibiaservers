import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-poland');
}

export default function EvoleraRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-poland" />;
}
