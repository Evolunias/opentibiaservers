import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-sweden');
}

export default function DemolidoresNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-sweden" />;
}
