import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-retro-server');
}

export default function NtoStar11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-retro-server" />;
}
