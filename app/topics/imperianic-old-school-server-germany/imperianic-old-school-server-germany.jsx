import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-germany');
}

export default function ImperianicOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-germany" />;
}
