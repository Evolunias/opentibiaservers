import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fresh-start-server-latin-america');
}

export default function OtmadnessFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fresh-start-server-latin-america" />;
}
