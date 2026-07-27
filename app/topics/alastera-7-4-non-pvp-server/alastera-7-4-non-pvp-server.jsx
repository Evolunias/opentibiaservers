import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-non-pvp-server');
}

export default function Alastera74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-non-pvp-server" />;
}
