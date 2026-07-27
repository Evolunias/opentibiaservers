import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-pvp-server');
}

export default function Alastera15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-pvp-server" />;
}
