import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-south-america');
}

export default function OtmadnessPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-south-america" />;
}
