import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-fresh-start-server-sweden');
}

export default function NostaltherFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-fresh-start-server-sweden" />;
}
