import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-retro-server-poland');
}

export default function NtoStarRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-retro-server-poland" />;
}
