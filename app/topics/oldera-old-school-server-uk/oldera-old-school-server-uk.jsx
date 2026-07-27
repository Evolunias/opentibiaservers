import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-uk');
}

export default function OlderaOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-uk" />;
}
