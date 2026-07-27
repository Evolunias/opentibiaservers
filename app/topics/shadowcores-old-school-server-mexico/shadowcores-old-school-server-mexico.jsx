import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-old-school-server-mexico');
}

export default function ShadowcoresOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-old-school-server-mexico" />;
}
