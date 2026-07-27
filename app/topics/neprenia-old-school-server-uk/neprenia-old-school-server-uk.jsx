import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-uk');
}

export default function NepreniaOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-uk" />;
}
