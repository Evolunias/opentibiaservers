import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-old-school-server-south-america');
}

export default function ShadowcoresOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-old-school-server-south-america" />;
}
