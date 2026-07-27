import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-98-old-school-server');
}

export default function Venoreot1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-98-old-school-server" />;
}
