import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-pvp-server');
}

export default function Alastera14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-pvp-server" />;
}
