import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-6-baiak-server');
}

export default function Otmadness86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-6-baiak-server" />;
}
