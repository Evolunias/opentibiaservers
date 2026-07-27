import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-canada-server');
}

export default function TibianusCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-canada-server" />;
}
