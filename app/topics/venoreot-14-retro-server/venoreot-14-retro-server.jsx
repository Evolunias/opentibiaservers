import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-retro-server');
}

export default function Venoreot14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-retro-server" />;
}
