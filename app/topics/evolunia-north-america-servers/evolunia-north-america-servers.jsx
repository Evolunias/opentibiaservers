import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-north-america-servers');
}

export default function EvoluniaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-north-america-servers" />;
}
