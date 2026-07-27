import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-enforced-server-europe');
}

export default function DemolidoresPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-enforced-server-europe" />;
}
