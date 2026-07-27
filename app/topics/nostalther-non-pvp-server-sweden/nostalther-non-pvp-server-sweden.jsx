import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-sweden');
}

export default function NostaltherNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-sweden" />;
}
