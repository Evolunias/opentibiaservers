import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-sweden');
}

export default function BaiakTibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-sweden" />;
}
