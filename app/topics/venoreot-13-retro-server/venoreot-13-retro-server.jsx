import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-retro-server');
}

export default function Venoreot13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-retro-server" />;
}
