import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-servers-poland');
}

export default function RangerSArcaniEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-servers-poland" />;
}
