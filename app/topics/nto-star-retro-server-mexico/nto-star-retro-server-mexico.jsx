import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-retro-server-mexico');
}

export default function NtoStarRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nto-star-retro-server-mexico" />;
}
