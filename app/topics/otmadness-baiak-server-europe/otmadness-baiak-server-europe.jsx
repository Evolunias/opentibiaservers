import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-europe');
}

export default function OtmadnessBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-europe" />;
}
