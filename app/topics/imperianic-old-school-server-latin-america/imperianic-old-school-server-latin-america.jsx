import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-latin-america');
}

export default function ImperianicOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-latin-america" />;
}
