import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-old-school-server-canada');
}

export default function ShadowcoresOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-old-school-server-canada" />;
}
