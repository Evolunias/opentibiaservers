import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-brazil');
}

export default function RealeraOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-brazil" />;
}
