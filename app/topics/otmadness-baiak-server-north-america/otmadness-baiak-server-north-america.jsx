import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-north-america');
}

export default function OtmadnessBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-north-america" />;
}
