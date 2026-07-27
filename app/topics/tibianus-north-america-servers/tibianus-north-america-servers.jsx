import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-north-america-servers');
}

export default function TibianusNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-north-america-servers" />;
}
