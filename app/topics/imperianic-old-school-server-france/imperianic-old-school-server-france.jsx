import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-france');
}

export default function ImperianicOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-france" />;
}
