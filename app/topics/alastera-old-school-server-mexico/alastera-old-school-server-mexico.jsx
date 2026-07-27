import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-mexico');
}

export default function AlasteraOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-mexico" />;
}
