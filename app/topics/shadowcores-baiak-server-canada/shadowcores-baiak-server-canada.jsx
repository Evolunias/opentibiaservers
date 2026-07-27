import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-canada');
}

export default function ShadowcoresBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-canada" />;
}
