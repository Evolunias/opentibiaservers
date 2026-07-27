import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-argentina');
}

export default function ElderaOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-argentina" />;
}
