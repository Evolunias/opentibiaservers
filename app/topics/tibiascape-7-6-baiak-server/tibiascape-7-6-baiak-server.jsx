import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-baiak-server');
}

export default function Tibiascape76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-baiak-server" />;
}
