import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-north-america-server');
}

export default function OxygenotNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-north-america-server" />;
}
