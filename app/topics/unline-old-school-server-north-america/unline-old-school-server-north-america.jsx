import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-old-school-server-north-america');
}

export default function UnlineOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-old-school-server-north-america" />;
}
