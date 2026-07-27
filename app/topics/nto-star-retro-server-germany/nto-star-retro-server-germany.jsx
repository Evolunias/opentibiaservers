import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-retro-server-germany');
}

export default function NtoStarRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-retro-server-germany" />;
}
