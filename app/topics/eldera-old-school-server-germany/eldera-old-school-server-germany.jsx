import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-germany');
}

export default function ElderaOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-germany" />;
}
