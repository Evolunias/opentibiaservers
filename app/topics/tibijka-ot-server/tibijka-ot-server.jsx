import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-ot-server');
}

export default function TibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-ot-server" />;
}
