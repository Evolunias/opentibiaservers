import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-retro-server');
}

export default function Venoreot15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-retro-server" />;
}
