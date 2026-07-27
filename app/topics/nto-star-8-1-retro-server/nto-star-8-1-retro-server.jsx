import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-1-retro-server');
}

export default function NtoStar81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-1-retro-server" />;
}
