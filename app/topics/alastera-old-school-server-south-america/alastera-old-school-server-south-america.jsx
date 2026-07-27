import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-south-america');
}

export default function AlasteraOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-south-america" />;
}
