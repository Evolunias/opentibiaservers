import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-6-non-pvp-server');
}

export default function Alastera76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-6-non-pvp-server" />;
}
