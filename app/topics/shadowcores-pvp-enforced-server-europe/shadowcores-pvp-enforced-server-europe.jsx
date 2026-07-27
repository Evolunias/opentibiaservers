import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-enforced-server-europe');
}

export default function ShadowcoresPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-enforced-server-europe" />;
}
