import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-6-retro-server');
}

export default function Venoreot86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-6-retro-server" />;
}
