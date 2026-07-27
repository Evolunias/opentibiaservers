import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-enforced-server-north-america');
}

export default function RuthlessChaosPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-enforced-server-north-america" />;
}
