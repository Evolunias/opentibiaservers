import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-old-school-server');
}

export default function Venoreot14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-old-school-server" />;
}
