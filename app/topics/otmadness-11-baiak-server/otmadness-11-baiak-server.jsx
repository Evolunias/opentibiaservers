import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-baiak-server');
}

export default function Otmadness11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-baiak-server" />;
}
