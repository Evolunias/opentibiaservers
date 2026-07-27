import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-old-school-server');
}

export default function Venoreot15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-old-school-server" />;
}
