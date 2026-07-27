import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-baiak-server');
}

export default function Otmadness76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-baiak-server" />;
}
