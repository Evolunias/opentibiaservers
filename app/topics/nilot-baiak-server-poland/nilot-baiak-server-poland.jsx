import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-poland');
}

export default function NilotBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-poland" />;
}
