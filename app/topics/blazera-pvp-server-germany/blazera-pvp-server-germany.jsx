import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-germany');
}

export default function BlazeraPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-germany" />;
}
