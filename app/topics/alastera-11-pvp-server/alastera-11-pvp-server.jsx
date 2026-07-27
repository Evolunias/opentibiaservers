import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-pvp-server');
}

export default function Alastera11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-pvp-server" />;
}
