import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-6-baiak-server');
}

export default function Tibiaorigins76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-6-baiak-server" />;
}
