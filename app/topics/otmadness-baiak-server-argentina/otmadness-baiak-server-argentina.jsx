import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-argentina');
}

export default function OtmadnessBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-argentina" />;
}
