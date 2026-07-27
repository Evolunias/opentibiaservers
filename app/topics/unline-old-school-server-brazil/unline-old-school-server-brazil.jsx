import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-old-school-server-brazil');
}

export default function UnlineOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-old-school-server-brazil" />;
}
