import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-usa');
}

export default function ElderaOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-usa" />;
}
