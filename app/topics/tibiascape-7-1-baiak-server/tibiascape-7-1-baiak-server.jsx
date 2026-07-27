import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-1-baiak-server');
}

export default function Tibiascape71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-1-baiak-server" />;
}
