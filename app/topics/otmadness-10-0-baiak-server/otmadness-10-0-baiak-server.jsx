import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-baiak-server');
}

export default function Otmadness100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-baiak-server" />;
}
