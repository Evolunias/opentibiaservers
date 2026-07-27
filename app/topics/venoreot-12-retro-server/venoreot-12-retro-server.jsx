import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-retro-server');
}

export default function Venoreot12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-retro-server" />;
}
