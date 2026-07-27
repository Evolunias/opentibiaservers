import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-72-retro-server');
}

export default function Tibijka772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-72-retro-server" />;
}
