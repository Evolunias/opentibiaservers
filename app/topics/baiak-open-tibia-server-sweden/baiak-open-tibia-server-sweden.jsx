import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-sweden');
}

export default function BaiakOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-sweden" />;
}
