import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-poland');
}

export default function DemolidoresOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-poland" />;
}
