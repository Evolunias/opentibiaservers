import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-pvp-server');
}

export default function Alastera13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-pvp-server" />;
}
