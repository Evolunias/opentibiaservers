import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-latin-america');
}

export default function OtmadnessBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-latin-america" />;
}
