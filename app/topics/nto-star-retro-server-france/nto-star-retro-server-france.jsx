import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-retro-server-france');
}

export default function NtoStarRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-retro-server-france" />;
}
