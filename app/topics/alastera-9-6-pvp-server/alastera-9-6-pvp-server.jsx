import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-pvp-server');
}

export default function Alastera96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-pvp-server" />;
}
