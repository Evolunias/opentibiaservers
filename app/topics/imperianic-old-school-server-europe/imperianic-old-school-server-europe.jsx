import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-europe');
}

export default function ImperianicOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-europe" />;
}
