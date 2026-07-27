import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-1-old-school-server');
}

export default function Venoreot71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-1-old-school-server" />;
}
