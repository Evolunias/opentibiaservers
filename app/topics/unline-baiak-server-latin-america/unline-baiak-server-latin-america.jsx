import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-latin-america');
}

export default function UnlineBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-latin-america" />;
}
