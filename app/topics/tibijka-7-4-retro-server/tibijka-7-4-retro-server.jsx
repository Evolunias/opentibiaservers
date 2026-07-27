import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-retro-server');
}

export default function Tibijka74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-retro-server" />;
}
