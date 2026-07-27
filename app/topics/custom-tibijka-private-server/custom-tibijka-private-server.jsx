import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-private-server');
}

export default function CustomTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-private-server" />;
}
