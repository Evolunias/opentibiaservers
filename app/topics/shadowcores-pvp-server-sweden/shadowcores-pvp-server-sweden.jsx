import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-sweden');
}

export default function ShadowcoresPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-sweden" />;
}
