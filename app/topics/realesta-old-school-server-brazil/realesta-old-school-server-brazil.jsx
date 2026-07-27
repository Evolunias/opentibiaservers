import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-old-school-server-brazil');
}

export default function RealestaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-old-school-server-brazil" />;
}
