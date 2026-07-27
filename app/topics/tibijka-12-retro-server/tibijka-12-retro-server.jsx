import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-retro-server');
}

export default function Tibijka12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-retro-server" />;
}
