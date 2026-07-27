import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-9-6-old-school-server');
}

export default function Venoreot96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-9-6-old-school-server" />;
}
