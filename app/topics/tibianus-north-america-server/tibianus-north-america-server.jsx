import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-north-america-server');
}

export default function TibianusNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-north-america-server" />;
}
