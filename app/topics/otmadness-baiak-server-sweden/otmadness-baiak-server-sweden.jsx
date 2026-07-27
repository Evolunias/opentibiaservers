import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-sweden');
}

export default function OtmadnessBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-sweden" />;
}
