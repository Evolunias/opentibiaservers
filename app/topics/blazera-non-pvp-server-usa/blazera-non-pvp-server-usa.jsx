import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-non-pvp-server-usa');
}

export default function BlazeraNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-non-pvp-server-usa" />;
}
