import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-sweden');
}

export default function TibiantisPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-sweden" />;
}
