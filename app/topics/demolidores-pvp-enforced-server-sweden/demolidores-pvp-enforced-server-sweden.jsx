import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-enforced-server-sweden');
}

export default function DemolidoresPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-enforced-server-sweden" />;
}
