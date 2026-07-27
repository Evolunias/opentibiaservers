import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-canada');
}

export default function DemolidoresOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-canada" />;
}
