import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-south-america');
}

export default function DemolidoresOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-south-america" />;
}
