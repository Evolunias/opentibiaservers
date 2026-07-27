import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-enforced-server-usa');
}

export default function RuthlessChaosPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-enforced-server-usa" />;
}
