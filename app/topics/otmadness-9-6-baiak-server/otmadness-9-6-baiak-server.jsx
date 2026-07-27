import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-9-6-baiak-server');
}

export default function Otmadness96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-9-6-baiak-server" />;
}
