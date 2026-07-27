import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-retro-server-france');
}

export default function KasteriaRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-retro-server-france" />;
}
