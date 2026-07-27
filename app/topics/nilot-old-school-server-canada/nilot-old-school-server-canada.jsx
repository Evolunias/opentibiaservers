import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-old-school-server-canada');
}

export default function NilotOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-old-school-server-canada" />;
}
