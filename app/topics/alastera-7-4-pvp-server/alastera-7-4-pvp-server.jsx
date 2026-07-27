import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-pvp-server');
}

export default function Alastera74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-pvp-server" />;
}
