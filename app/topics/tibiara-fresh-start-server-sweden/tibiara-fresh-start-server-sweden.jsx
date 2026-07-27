import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-sweden');
}

export default function TibiaraFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-sweden" />;
}
