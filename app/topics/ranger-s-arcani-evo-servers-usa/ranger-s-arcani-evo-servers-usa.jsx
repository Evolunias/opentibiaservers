import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-servers-usa');
}

export default function RangerSArcaniEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-servers-usa" />;
}
