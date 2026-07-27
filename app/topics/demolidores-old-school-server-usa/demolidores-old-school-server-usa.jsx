import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-usa');
}

export default function DemolidoresOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-usa" />;
}
