import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-baiak-server');
}

export default function Tibiaorigins13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-baiak-server" />;
}
