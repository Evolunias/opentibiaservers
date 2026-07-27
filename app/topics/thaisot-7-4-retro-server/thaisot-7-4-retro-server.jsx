import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-retro-server');
}

export default function Thaisot74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-retro-server" />;
}
