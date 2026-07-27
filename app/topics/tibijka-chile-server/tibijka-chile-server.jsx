import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-chile-server');
}

export default function TibijkaChileServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-chile-server" />;
}
