import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-old-school-server-canada');
}

export default function UnlineOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="unline-old-school-server-canada" />;
}
