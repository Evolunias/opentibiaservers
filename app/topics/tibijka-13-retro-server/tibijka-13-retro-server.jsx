import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-retro-server');
}

export default function Tibijka13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-retro-server" />;
}
