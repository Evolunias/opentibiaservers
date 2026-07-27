import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-old-school-server-uk');
}

export default function SabrehavenOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-old-school-server-uk" />;
}
