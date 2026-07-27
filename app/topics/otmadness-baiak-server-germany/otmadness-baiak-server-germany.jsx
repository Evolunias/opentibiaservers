import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-germany');
}

export default function OtmadnessBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-germany" />;
}
