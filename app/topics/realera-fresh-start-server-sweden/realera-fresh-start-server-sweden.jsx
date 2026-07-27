import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-sweden');
}

export default function RealeraFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-sweden" />;
}
