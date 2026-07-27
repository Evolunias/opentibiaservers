import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-non-pvp-server');
}

export default function Alastera12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-non-pvp-server" />;
}
