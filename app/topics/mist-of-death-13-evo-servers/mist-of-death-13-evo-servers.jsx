import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-13-evo-servers');
}

export default function MistOfDeath13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-13-evo-servers" />;
}
