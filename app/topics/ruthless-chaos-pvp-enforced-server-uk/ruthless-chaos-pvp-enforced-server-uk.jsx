import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-enforced-server-uk');
}

export default function RuthlessChaosPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-enforced-server-uk" />;
}
