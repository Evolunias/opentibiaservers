import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-argentina');
}

export default function AlasteraOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-argentina" />;
}
