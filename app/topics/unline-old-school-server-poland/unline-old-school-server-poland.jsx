import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-old-school-server-poland');
}

export default function UnlineOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-old-school-server-poland" />;
}
