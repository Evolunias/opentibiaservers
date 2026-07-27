import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-latin-america');
}

export default function ElderaOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-latin-america" />;
}
