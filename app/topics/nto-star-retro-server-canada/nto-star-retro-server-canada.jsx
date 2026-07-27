import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-retro-server-canada');
}

export default function NtoStarRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-retro-server-canada" />;
}
