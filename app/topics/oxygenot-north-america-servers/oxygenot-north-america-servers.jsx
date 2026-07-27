import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-north-america-servers');
}

export default function OxygenotNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-north-america-servers" />;
}
