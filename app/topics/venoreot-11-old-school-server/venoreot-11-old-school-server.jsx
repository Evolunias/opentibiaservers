import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-old-school-server');
}

export default function Venoreot11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-old-school-server" />;
}
