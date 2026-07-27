import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-72-retro-server');
}

export default function Midhem772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-72-retro-server" />;
}
