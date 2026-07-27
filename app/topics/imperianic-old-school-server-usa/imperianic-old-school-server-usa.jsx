import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-usa');
}

export default function ImperianicOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-usa" />;
}
