import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-retro-server');
}

export default function NtoStar12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-retro-server" />;
}
