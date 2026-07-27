import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-sweden');
}

export default function TibianusPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-sweden" />;
}
