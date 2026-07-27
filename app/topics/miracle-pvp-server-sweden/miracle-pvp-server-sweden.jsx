import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-sweden');
}

export default function MiraclePvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-sweden" />;
}
