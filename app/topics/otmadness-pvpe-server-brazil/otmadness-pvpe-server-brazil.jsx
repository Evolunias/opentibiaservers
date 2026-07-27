import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvpe-server-brazil');
}

export default function OtmadnessPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvpe-server-brazil" />;
}
