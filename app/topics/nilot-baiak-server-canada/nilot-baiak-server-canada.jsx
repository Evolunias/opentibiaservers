import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-canada');
}

export default function NilotBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-canada" />;
}
