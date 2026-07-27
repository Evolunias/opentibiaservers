import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-old-school-server-poland');
}

export default function ElderaOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-old-school-server-poland" />;
}
