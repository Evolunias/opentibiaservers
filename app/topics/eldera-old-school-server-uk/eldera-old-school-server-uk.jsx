import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-uk');
}

export default function ElderaOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-uk" />;
}
