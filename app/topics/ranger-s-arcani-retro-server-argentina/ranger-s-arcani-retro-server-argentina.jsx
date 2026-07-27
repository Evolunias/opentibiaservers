import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-argentina');
}

export default function RangerSArcaniRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-argentina" />;
}
