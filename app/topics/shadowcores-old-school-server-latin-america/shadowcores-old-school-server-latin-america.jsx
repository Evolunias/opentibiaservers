import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-old-school-server-latin-america');
}

export default function ShadowcoresOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-old-school-server-latin-america" />;
}
