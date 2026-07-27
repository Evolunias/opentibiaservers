import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-uk');
}

export default function OtmadnessBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-uk" />;
}
