import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-mexico');
}

export default function DemolidoresOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-mexico" />;
}
