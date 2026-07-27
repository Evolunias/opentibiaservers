import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-baiak-server');
}

export default function Otmadness12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-baiak-server" />;
}
