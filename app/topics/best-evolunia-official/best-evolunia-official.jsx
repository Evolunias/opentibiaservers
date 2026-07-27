import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-official');
}

export default function BestEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-official" />;
}
