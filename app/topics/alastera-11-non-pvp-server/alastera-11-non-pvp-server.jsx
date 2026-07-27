import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-non-pvp-server');
}

export default function Alastera11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-non-pvp-server" />;
}
