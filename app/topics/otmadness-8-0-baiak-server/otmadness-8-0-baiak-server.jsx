import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-0-baiak-server');
}

export default function Otmadness80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-0-baiak-server" />;
}
