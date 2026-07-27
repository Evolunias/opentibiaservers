import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-sweden');
}

export default function OtmadnessPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-sweden" />;
}
