import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-poland');
}

export default function OtmadnessBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-poland" />;
}
