import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-latin-america');
}

export default function NilotBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-latin-america" />;
}
