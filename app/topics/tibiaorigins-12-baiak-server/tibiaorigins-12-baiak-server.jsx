import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-baiak-server');
}

export default function Tibiaorigins12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-baiak-server" />;
}
