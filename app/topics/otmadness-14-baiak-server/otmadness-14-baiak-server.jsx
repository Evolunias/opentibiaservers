import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-baiak-server');
}

export default function Otmadness14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-baiak-server" />;
}
