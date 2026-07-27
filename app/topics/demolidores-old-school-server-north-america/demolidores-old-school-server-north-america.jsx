import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-north-america');
}

export default function DemolidoresOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-north-america" />;
}
