import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-4-retro-server');
}

export default function NtoStar84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-4-retro-server" />;
}
