import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-sweden');
}

export default function NepreniaPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-sweden" />;
}
