import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-old-school-server-france');
}

export default function NilotOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-old-school-server-france" />;
}
