import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-retro-server-argentina');
}

export default function NtoStarRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-retro-server-argentina" />;
}
