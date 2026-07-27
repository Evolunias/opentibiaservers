import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-retro-server');
}

export default function Midhem100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-retro-server" />;
}
