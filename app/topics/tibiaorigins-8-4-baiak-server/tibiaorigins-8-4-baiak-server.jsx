import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-4-baiak-server');
}

export default function Tibiaorigins84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-4-baiak-server" />;
}
