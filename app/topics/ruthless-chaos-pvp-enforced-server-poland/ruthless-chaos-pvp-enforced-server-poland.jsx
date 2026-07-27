import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-enforced-server-poland');
}

export default function RuthlessChaosPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-enforced-server-poland" />;
}
