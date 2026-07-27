import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-4-retro-server');
}

export default function Venoreot84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-4-retro-server" />;
}
