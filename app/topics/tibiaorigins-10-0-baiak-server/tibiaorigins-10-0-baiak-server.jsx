import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-0-baiak-server');
}

export default function Tibiaorigins100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-0-baiak-server" />;
}
