import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-baiak-server');
}

export default function Tibiascape11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-baiak-server" />;
}
