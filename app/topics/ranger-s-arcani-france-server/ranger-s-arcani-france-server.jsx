import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-france-server');
}

export default function RangerSArcaniFranceServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-france-server" />;
}
