import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-sweden');
}

export default function RangerSArcaniRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-sweden" />;
}
