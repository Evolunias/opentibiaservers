import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-old-school-server-north-america');
}

export default function NilotOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-old-school-server-north-america" />;
}
