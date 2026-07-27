import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-brazil');
}

export default function NostaltherOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-brazil" />;
}
