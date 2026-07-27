import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-mexico-servers');
}

export default function RangerSArcaniMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-mexico-servers" />;
}
