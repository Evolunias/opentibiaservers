import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-retro-server');
}

export default function Midhem13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-retro-server" />;
}
