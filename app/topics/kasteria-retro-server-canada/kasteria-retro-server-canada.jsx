import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-retro-server-canada');
}

export default function KasteriaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-retro-server-canada" />;
}
