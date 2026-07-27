import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-old-school-server-north-america');
}

export default function ShadowcoresOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-old-school-server-north-america" />;
}
