import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-old-school-server');
}

export default function Venoreot12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-old-school-server" />;
}
