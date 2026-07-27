import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-europe');
}

export default function BlazeraPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-europe" />;
}
