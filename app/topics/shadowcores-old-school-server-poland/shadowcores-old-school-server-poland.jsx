import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-old-school-server-poland');
}

export default function ShadowcoresOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-old-school-server-poland" />;
}
