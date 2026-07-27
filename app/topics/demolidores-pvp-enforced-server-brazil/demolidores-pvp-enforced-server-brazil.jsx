import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-enforced-server-brazil');
}

export default function DemolidoresPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-enforced-server-brazil" />;
}
