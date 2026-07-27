import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-north-america');
}

export default function AlasteraOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-north-america" />;
}
