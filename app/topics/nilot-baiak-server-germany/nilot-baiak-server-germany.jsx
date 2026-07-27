import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-germany');
}

export default function NilotBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-germany" />;
}
