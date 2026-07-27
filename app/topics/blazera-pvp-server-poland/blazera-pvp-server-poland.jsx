import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-poland');
}

export default function BlazeraPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-poland" />;
}
