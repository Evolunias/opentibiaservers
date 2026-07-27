import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-old-school-server-uk');
}

export default function RealestaOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-old-school-server-uk" />;
}
