import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-9-6-retro-server');
}

export default function Venoreot96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-9-6-retro-server" />;
}
