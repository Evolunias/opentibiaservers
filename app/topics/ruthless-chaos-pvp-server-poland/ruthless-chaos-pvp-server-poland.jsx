import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-poland');
}

export default function RuthlessChaosPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-poland" />;
}
