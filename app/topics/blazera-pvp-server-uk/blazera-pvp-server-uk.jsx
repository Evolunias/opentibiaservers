import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-uk');
}

export default function BlazeraPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-uk" />;
}
