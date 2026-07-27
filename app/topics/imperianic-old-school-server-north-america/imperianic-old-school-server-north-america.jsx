import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-north-america');
}

export default function ImperianicOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-north-america" />;
}
