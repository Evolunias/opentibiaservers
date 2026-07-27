import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-north-america');
}

export default function RuthlessChaosPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-north-america" />;
}
