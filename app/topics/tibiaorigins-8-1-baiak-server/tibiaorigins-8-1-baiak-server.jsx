import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-1-baiak-server');
}

export default function Tibiaorigins81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-1-baiak-server" />;
}
