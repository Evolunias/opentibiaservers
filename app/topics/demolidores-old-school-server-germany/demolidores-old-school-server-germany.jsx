import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-germany');
}

export default function DemolidoresOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-germany" />;
}
