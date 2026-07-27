import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-sweden');
}

export default function UnlinePvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-sweden" />;
}
