import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-mexico');
}

export default function NilotBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-mexico" />;
}
