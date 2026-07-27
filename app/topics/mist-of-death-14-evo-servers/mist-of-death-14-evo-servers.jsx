import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-14-evo-servers');
}

export default function MistOfDeath14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-14-evo-servers" />;
}
