import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-baiak-server');
}

export default function Tibiaorigins71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-baiak-server" />;
}
