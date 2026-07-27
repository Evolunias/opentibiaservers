import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-baiak-server');
}

export default function Otmadness71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-baiak-server" />;
}
