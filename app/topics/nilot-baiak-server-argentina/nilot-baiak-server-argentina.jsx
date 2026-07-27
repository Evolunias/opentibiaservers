import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-argentina');
}

export default function NilotBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-argentina" />;
}
