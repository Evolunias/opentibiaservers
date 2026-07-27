import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-usa');
}

export default function OtmadnessBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-usa" />;
}
