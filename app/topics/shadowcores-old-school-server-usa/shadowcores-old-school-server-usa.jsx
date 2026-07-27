import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-old-school-server-usa');
}

export default function ShadowcoresOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-old-school-server-usa" />;
}
