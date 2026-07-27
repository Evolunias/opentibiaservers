import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-europe-server');
}

export default function TibianusEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-europe-server" />;
}
