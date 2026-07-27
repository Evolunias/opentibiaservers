import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-mexico');
}

export default function ElderaOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-mexico" />;
}
