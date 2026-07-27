import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-brazil');
}

export default function NepreniaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-brazil" />;
}
