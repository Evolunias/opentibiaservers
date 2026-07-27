import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-4-retro-server');
}

export default function Thaisot84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-4-retro-server" />;
}
