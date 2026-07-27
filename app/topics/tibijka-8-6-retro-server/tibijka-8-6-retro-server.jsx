import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-6-retro-server');
}

export default function Tibijka86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-6-retro-server" />;
}
