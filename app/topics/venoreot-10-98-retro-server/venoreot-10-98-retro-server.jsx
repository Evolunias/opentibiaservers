import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-98-retro-server');
}

export default function Venoreot1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-98-retro-server" />;
}
