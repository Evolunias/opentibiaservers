import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-72-retro-server');
}

export default function Venoreot772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-72-retro-server" />;
}
