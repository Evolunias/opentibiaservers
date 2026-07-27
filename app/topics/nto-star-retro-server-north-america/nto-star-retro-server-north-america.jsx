import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-retro-server-north-america');
}

export default function NtoStarRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-retro-server-north-america" />;
}
