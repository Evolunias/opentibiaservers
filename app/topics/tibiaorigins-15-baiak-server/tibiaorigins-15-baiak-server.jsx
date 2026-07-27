import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-baiak-server');
}

export default function Tibiaorigins15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-baiak-server" />;
}
