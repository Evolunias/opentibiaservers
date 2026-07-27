import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-france');
}

export default function RangerSArcaniRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-france" />;
}
