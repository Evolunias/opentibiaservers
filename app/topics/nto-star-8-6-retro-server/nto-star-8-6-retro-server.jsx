import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-6-retro-server');
}

export default function NtoStar86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-6-retro-server" />;
}
