import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-4-retro-server');
}

export default function Midhem74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-4-retro-server" />;
}
