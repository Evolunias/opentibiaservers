import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-non-pvp-server');
}

export default function Alastera15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-non-pvp-server" />;
}
