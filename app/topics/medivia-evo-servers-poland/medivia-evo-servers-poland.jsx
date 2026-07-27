import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-servers-poland');
}

export default function MediviaEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-servers-poland" />;
}
