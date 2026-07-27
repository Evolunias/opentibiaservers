import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-mexico-server');
}

export default function EvoluniaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-mexico-server" />;
}
