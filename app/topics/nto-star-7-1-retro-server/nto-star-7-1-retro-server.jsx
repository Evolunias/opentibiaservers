import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-1-retro-server');
}

export default function NtoStar71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-1-retro-server" />;
}
