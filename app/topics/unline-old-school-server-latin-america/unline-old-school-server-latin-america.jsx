import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-old-school-server-latin-america');
}

export default function UnlineOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-old-school-server-latin-america" />;
}
