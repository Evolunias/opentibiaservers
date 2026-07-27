import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-brazil');
}

export default function ElderaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-brazil" />;
}
