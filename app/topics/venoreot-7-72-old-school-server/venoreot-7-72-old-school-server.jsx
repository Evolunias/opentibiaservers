import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-72-old-school-server');
}

export default function Venoreot772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-72-old-school-server" />;
}
