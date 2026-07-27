import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-europe');
}

export default function NostaltherOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-europe" />;
}
