import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-south-america');
}

export default function RuthlessChaosPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-south-america" />;
}
