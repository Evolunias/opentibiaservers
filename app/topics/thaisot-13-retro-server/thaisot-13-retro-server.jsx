import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-retro-server');
}

export default function Thaisot13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-retro-server" />;
}
