import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-old-school-server-brazil');
}

export default function ShadowcoresOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-old-school-server-brazil" />;
}
