import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-retro-server');
}

export default function Tibijka15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-retro-server" />;
}
