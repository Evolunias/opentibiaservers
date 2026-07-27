import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-retro-server-germany');
}

export default function KasteriaRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-retro-server-germany" />;
}
