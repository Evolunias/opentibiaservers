import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-uk');
}

export default function AlasteraOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-uk" />;
}
