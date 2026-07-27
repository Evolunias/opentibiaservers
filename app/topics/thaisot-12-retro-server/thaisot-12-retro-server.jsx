import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-retro-server');
}

export default function Thaisot12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-retro-server" />;
}
