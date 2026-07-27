import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-uk');
}

export default function NilotBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-uk" />;
}
