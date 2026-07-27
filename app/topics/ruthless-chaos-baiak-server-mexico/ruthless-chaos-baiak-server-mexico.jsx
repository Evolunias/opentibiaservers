import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-baiak-server-mexico');
}

export default function RuthlessChaosBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-baiak-server-mexico" />;
}
