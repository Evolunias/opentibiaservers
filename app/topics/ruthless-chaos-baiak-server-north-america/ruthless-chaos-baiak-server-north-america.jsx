import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-baiak-server-north-america');
}

export default function RuthlessChaosBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-baiak-server-north-america" />;
}
