import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-retro-server');
}

export default function NtoStar100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-retro-server" />;
}
