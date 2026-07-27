import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-baiak-server');
}

export default function Tibiascape81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-baiak-server" />;
}
