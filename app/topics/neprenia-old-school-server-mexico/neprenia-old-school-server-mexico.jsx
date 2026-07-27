import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-mexico');
}

export default function NepreniaOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-mexico" />;
}
