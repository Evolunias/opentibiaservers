import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-servers-poland');
}

export default function TibijkaEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-servers-poland" />;
}
