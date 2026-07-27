import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-baiak-server-latin-america');
}

export default function AureraGlobalBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-baiak-server-latin-america" />;
}
