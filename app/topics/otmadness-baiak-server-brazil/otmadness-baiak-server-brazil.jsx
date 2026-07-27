import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-brazil');
}

export default function OtmadnessBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-brazil" />;
}
