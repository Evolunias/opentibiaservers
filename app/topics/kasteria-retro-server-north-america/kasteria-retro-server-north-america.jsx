import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-retro-server-north-america');
}

export default function KasteriaRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-retro-server-north-america" />;
}
