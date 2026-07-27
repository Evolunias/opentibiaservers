import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-south-america');
}

export default function OtmadnessBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-south-america" />;
}
