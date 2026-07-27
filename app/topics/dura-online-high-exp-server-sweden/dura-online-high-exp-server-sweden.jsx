import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-high-exp-server-sweden');
}

export default function DuraOnlineHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-high-exp-server-sweden" />;
}
