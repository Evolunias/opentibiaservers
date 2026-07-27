import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-non-pvp-server');
}

export default function Alastera1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-non-pvp-server" />;
}
