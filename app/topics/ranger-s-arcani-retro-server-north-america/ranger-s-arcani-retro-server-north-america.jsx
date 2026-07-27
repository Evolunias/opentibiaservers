import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-north-america');
}

export default function RangerSArcaniRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-north-america" />;
}
