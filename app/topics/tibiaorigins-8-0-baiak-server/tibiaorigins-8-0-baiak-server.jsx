import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-0-baiak-server');
}

export default function Tibiaorigins80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-0-baiak-server" />;
}
