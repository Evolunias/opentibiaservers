import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-canada');
}

export default function ImperianicOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-canada" />;
}
