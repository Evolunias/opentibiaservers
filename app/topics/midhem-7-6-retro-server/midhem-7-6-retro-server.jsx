import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-retro-server');
}

export default function Midhem76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-retro-server" />;
}
