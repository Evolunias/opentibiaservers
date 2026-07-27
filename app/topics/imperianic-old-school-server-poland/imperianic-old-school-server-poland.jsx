import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-poland');
}

export default function ImperianicOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-poland" />;
}
