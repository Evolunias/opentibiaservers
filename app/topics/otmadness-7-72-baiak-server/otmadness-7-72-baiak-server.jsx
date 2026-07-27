import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-72-baiak-server');
}

export default function Otmadness772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-72-baiak-server" />;
}
