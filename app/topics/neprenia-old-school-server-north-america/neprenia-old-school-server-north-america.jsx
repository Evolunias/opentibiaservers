import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-north-america');
}

export default function NepreniaOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-north-america" />;
}
