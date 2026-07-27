import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-enforced-server-north-america');
}

export default function DemolidoresPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-enforced-server-north-america" />;
}
