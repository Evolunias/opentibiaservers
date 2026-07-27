import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-germany');
}

export default function RuthlessChaosPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-germany" />;
}
