import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-retro-server');
}

export default function Tibijka81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-retro-server" />;
}
