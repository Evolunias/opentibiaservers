import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-canada');
}

export default function OtmadnessBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-canada" />;
}
