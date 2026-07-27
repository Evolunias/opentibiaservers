import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-retro-server');
}

export default function Midhem11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-retro-server" />;
}
