import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-south-america-servers');
}

export default function EvoluniaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-south-america-servers" />;
}
