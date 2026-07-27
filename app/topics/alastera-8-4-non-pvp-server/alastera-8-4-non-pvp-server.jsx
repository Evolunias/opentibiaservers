import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-4-non-pvp-server');
}

export default function Alastera84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-4-non-pvp-server" />;
}
