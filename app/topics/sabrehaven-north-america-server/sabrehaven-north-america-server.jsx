import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-north-america-server');
}

export default function SabrehavenNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-north-america-server" />;
}
