import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-servers-usa');
}

export default function MistOfDeathEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-servers-usa" />;
}
