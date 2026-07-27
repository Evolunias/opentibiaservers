import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-old-school-server-uk');
}

export default function TibiaoriginsOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-old-school-server-uk" />;
}
