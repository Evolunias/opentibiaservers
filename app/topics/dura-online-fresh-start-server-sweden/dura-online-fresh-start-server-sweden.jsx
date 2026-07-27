import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-fresh-start-server-sweden');
}

export default function DuraOnlineFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-fresh-start-server-sweden" />;
}
