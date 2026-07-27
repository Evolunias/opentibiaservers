import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-retro-server-brazil');
}

export default function NtoStarRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-retro-server-brazil" />;
}
