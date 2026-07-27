import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-uk');
}

export default function ImperianicOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-uk" />;
}
