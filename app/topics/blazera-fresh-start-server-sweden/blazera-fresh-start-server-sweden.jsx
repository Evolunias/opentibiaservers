import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-fresh-start-server-sweden');
}

export default function BlazeraFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-fresh-start-server-sweden" />;
}
