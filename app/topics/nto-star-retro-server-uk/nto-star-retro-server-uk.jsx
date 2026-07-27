import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-retro-server-uk');
}

export default function NtoStarRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-retro-server-uk" />;
}
