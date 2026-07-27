import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-brazil');
}

export default function ImperianicOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-brazil" />;
}
