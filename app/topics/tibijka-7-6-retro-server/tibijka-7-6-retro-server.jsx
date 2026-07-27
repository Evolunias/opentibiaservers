import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-retro-server');
}

export default function Tibijka76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-retro-server" />;
}
