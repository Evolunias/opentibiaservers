import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-4-retro-server');
}

export default function Venoreot74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-4-retro-server" />;
}
