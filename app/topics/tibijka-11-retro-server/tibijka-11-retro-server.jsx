import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-retro-server');
}

export default function Tibijka11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-retro-server" />;
}
