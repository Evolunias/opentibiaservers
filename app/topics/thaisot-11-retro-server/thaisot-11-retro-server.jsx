import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-retro-server');
}

export default function Thaisot11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-retro-server" />;
}
