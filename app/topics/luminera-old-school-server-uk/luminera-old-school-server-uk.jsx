import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-uk');
}

export default function LumineraOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-uk" />;
}
