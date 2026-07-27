import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-nto-star-server');
}

export default function RetroNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="retro-nto-star-server" />;
}
