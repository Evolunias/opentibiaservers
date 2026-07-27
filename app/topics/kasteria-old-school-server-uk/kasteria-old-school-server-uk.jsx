import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-uk');
}

export default function KasteriaOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-uk" />;
}
