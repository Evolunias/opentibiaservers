import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-1-retro-server');
}

export default function Venoreot81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-1-retro-server" />;
}
