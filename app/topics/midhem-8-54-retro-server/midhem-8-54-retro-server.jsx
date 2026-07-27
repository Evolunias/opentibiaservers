import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-54-retro-server');
}

export default function Midhem854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-54-retro-server" />;
}
