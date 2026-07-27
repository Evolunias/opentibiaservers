import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-sweden-servers');
}

export default function EvoluniaSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-sweden-servers" />;
}
