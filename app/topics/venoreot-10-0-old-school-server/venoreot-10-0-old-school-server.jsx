import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-old-school-server');
}

export default function Venoreot100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-old-school-server" />;
}
