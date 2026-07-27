import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-usa-server');
}

export default function TibijkaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-usa-server" />;
}
