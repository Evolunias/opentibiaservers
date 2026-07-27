import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-canada');
}

export default function ElderaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-canada" />;
}
