import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-baiak-server');
}

export default function Tibiascape86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-baiak-server" />;
}
