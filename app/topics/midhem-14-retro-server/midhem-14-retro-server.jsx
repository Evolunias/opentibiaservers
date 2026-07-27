import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-retro-server');
}

export default function Midhem14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-retro-server" />;
}
