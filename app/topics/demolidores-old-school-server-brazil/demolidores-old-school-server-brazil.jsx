import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-brazil');
}

export default function DemolidoresOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-brazil" />;
}
