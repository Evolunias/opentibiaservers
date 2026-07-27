import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-baiak-server');
}

export default function Tibiaorigins14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-baiak-server" />;
}
