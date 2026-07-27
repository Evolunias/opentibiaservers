import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-0-retro-server');
}

export default function Venoreot80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-0-retro-server" />;
}
