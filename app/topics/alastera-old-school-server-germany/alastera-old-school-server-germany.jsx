import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-germany');
}

export default function AlasteraOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-germany" />;
}
