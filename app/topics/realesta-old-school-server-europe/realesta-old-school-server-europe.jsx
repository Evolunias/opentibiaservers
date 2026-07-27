import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-old-school-server-europe');
}

export default function RealestaOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-old-school-server-europe" />;
}
