import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-france-servers');
}

export default function RangerSArcaniFranceServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-france-servers" />;
}
