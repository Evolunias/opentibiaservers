import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-enforced-server-europe');
}

export default function RuthlessChaosPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-enforced-server-europe" />;
}
