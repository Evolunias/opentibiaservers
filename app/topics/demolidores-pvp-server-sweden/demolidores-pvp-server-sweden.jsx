import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-sweden');
}

export default function DemolidoresPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-sweden" />;
}
