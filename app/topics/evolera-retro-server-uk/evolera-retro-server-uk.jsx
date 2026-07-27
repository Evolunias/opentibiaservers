import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-uk');
}

export default function EvoleraRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-uk" />;
}
