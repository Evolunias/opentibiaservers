import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-private-server');
}

export default function RangerSArcaniPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-private-server" />;
}
