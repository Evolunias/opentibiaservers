import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-0-evo-servers');
}

export default function MistOfDeath100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-0-evo-servers" />;
}
