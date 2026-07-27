import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-uk');
}

export default function ThorniaOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-uk" />;
}
