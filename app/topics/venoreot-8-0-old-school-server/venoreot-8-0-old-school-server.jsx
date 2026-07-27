import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-0-old-school-server');
}

export default function Venoreot80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-0-old-school-server" />;
}
