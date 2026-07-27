import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-sweden-server');
}

export default function EvoluniaSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-sweden-server" />;
}
