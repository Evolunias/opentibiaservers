import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-1-retro-server');
}

export default function Thaisot81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-1-retro-server" />;
}
