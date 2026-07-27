import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-old-school-server-mexico');
}

export default function UnlineOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="unline-old-school-server-mexico" />;
}
