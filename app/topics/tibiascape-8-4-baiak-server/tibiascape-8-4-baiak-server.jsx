import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-baiak-server');
}

export default function Tibiascape84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-baiak-server" />;
}
