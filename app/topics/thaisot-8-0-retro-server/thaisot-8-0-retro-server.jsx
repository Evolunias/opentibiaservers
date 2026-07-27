import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-0-retro-server');
}

export default function Thaisot80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-0-retro-server" />;
}
