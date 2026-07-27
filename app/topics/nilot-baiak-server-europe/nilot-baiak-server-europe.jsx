import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-europe');
}

export default function NilotBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-europe" />;
}
