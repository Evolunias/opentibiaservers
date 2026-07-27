import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-enforced-server-germany');
}

export default function DemolidoresPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-enforced-server-germany" />;
}
