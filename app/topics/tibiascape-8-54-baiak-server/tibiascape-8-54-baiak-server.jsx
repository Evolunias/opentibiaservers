import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-54-baiak-server');
}

export default function Tibiascape854BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-54-baiak-server" />;
}
