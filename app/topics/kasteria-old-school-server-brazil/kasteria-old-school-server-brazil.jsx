import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-brazil');
}

export default function KasteriaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-brazil" />;
}
