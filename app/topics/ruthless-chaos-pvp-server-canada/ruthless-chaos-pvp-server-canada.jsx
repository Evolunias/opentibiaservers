import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-canada');
}

export default function RuthlessChaosPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-canada" />;
}
