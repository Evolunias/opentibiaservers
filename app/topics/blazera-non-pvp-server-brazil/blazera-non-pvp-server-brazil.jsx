import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-non-pvp-server-brazil');
}

export default function BlazeraNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-non-pvp-server-brazil" />;
}
