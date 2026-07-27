import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-south-america-server');
}

export default function EvoluniaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-south-america-server" />;
}
