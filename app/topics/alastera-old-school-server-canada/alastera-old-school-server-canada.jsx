import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-canada');
}

export default function AlasteraOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-canada" />;
}
