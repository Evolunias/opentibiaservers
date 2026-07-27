import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-sweden');
}

export default function RealestaFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-sweden" />;
}
