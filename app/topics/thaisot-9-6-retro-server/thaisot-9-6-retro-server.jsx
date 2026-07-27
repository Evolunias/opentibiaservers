import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-retro-server');
}

export default function Thaisot96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-retro-server" />;
}
