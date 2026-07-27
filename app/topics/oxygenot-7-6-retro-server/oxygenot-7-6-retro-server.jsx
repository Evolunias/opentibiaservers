import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-6-retro-server');
}

export default function Oxygenot76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-6-retro-server" />;
}
