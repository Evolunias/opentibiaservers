import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-latin-america');
}

export default function RangerSArcaniRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-latin-america" />;
}
