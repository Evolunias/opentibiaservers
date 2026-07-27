import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fresh-start-server-canada');
}

export default function OtmadnessFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fresh-start-server-canada" />;
}
