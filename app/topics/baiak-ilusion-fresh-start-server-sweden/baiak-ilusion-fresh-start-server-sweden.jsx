import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-fresh-start-server-sweden');
}

export default function BaiakIlusionFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-fresh-start-server-sweden" />;
}
