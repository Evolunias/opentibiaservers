import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-baiak-server');
}

export default function Tibiascape74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-baiak-server" />;
}
