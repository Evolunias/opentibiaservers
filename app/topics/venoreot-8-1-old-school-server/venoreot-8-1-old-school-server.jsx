import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-1-old-school-server');
}

export default function Venoreot81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-1-old-school-server" />;
}
