import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-usa');
}

export default function NilotBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-usa" />;
}
