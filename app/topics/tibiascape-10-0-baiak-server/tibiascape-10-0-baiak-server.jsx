import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-baiak-server');
}

export default function Tibiascape100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-baiak-server" />;
}
