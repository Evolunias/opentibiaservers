import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-fresh-start-server-sweden');
}

export default function UnlineFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-fresh-start-server-sweden" />;
}
