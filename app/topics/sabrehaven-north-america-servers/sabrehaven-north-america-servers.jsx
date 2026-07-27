import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-north-america-servers');
}

export default function SabrehavenNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-north-america-servers" />;
}
