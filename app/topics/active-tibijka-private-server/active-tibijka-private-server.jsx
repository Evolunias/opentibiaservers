import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-private-server');
}

export default function ActiveTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-private-server" />;
}
