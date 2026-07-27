import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-retro-server-poland');
}

export default function KasteriaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-retro-server-poland" />;
}
