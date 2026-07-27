import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-brazil');
}

export default function NilotBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-brazil" />;
}
