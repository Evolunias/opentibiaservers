import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-old-school-server-france');
}

export default function ShadowcoresOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-old-school-server-france" />;
}
