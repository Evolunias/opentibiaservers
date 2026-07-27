import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-retro-server');
}

export default function Thaisot100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-retro-server" />;
}
