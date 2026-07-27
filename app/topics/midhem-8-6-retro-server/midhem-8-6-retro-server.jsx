import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-retro-server');
}

export default function Midhem86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-retro-server" />;
}
