import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fresh-start-server-north-america');
}

export default function OtmadnessFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fresh-start-server-north-america" />;
}
