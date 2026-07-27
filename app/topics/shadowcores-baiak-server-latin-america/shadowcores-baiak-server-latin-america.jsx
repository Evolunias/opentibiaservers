import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-latin-america');
}

export default function ShadowcoresBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-latin-america" />;
}
