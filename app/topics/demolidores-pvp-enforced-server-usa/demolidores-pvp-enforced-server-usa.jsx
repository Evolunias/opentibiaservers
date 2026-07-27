import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-enforced-server-usa');
}

export default function DemolidoresPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-enforced-server-usa" />;
}
