import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-europe');
}

export default function ElderaOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-europe" />;
}
