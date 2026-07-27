import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-south-america');
}

export default function RangerSArcaniRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-south-america" />;
}
