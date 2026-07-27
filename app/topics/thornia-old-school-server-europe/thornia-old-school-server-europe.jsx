import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-europe');
}

export default function ThorniaOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-europe" />;
}
