import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-baiak-server');
}

export default function Tibiascape15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-baiak-server" />;
}
