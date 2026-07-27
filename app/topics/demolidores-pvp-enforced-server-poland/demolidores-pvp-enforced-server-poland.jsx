import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-enforced-server-poland');
}

export default function DemolidoresPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-enforced-server-poland" />;
}
