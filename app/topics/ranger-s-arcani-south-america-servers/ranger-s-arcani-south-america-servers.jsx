import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-south-america-servers');
}

export default function RangerSArcaniSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-south-america-servers" />;
}
