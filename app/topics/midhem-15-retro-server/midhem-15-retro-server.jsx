import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-retro-server');
}

export default function Midhem15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-retro-server" />;
}
