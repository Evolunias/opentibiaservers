import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-europe');
}

export default function DemolidoresOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-europe" />;
}
