import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fun-server');
}

export default function TibijkaFunServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fun-server" />;
}
