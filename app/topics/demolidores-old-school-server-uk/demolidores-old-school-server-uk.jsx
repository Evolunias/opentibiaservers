import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-uk');
}

export default function DemolidoresOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-uk" />;
}
