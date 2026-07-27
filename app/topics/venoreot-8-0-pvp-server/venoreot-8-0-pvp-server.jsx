import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-0-pvp-server');
}

export default function Venoreot80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-0-pvp-server" />;
}
