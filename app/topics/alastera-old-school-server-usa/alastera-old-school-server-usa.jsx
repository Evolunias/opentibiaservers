import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-usa');
}

export default function AlasteraOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-usa" />;
}
