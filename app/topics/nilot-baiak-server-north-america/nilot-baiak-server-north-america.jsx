import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-north-america');
}

export default function NilotBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-north-america" />;
}
