import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-old-school-server-poland');
}

export default function AlasteraOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-old-school-server-poland" />;
}
