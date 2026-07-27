import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-retro-server');
}

export default function Venoreot11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-retro-server" />;
}
