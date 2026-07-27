import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-france');
}

export default function NepreniaRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-france" />;
}
