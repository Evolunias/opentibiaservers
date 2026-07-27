import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-mexico');
}

export default function OtmadnessBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-mexico" />;
}
