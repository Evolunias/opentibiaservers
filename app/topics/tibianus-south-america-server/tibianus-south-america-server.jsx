import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-south-america-server');
}

export default function TibianusSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-south-america-server" />;
}
