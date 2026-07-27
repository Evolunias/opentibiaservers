import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-baiak-server');
}

export default function Tibiascape96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-baiak-server" />;
}
