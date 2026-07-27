import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-mexico');
}

export default function ImperianicOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-mexico" />;
}
