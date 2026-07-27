import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-south-america-servers');
}

export default function TibianusSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-south-america-servers" />;
}
