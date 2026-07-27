import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-server');
}

export default function TibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-server" />;
}
