import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-germany');
}

export default function ArcaniarlRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-germany" />;
}
