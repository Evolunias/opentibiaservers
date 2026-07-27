import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-mexico');
}

export default function RangerSArcaniRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-mexico" />;
}
