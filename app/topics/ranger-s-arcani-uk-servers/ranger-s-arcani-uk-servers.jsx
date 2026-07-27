import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-uk-servers');
}

export default function RangerSArcaniUkServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-uk-servers" />;
}
