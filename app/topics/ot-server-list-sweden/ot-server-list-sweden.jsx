import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-sweden');
}

export default function OtServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-sweden" />;
}
