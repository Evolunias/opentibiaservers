import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-old-school-server-south-america');
}

export default function NilotOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-old-school-server-south-america" />;
}
