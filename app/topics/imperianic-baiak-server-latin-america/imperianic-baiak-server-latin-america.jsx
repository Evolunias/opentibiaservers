import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-baiak-server-latin-america');
}

export default function ImperianicBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-baiak-server-latin-america" />;
}
