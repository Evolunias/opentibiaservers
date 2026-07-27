import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-6-baiak-server');
}

export default function Tibiaorigins86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-6-baiak-server" />;
}
