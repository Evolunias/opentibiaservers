import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-mexico-servers');
}

export default function EvoluniaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-mexico-servers" />;
}
