import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-6-retro-server');
}

export default function Venoreot76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-6-retro-server" />;
}
