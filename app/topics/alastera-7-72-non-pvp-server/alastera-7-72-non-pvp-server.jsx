import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-72-non-pvp-server');
}

export default function Alastera772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-72-non-pvp-server" />;
}
