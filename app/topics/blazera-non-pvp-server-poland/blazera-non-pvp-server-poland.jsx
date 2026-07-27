import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-non-pvp-server-poland');
}

export default function BlazeraNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-non-pvp-server-poland" />;
}
