import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-0-retro-server');
}

export default function Midhem80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-0-retro-server" />;
}
