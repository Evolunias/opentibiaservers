import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-baiak-server');
}

export default function Tibiascape12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-baiak-server" />;
}
