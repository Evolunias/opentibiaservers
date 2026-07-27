import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-sweden');
}

export default function NostaltherPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-sweden" />;
}
