import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-baiak-server-latin-america');
}

export default function RuthlessChaosBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-baiak-server-latin-america" />;
}
