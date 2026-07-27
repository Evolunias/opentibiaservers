import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-brazil');
}

export default function ThorniaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-brazil" />;
}
