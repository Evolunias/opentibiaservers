import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-retro-server');
}

export default function Venoreot100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-retro-server" />;
}
