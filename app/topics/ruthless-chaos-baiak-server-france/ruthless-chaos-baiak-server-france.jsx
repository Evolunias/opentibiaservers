import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-baiak-server-france');
}

export default function RuthlessChaosBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-baiak-server-france" />;
}
