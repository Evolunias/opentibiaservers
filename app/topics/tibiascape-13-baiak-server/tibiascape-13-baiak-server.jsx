import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-baiak-server');
}

export default function Tibiascape13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-baiak-server" />;
}
