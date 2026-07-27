import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-72-baiak-server');
}

export default function Tibiascape772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-72-baiak-server" />;
}
