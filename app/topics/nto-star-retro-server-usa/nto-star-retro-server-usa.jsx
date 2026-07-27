import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-retro-server-usa');
}

export default function NtoStarRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-retro-server-usa" />;
}
