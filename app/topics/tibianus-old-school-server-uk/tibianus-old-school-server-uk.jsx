import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-uk');
}

export default function TibianusOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-uk" />;
}
