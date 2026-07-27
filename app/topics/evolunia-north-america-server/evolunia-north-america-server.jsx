import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-north-america-server');
}

export default function EvoluniaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-north-america-server" />;
}
