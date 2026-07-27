import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-old-school-server-usa');
}

export default function UnlineOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-old-school-server-usa" />;
}
