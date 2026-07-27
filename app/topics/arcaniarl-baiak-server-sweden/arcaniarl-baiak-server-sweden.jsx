import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-baiak-server-sweden');
}

export default function ArcaniarlBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-baiak-server-sweden" />;
}
