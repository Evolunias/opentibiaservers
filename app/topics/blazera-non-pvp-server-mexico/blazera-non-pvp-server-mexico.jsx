import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-non-pvp-server-mexico');
}

export default function BlazeraNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-non-pvp-server-mexico" />;
}
