import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-north-america');
}

export default function ElderaOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-north-america" />;
}
