import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-old-school-server-germany');
}

export default function UnlineOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-old-school-server-germany" />;
}
