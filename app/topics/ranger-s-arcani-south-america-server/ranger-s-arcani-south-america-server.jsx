import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-south-america-server');
}

export default function RangerSArcaniSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-south-america-server" />;
}
