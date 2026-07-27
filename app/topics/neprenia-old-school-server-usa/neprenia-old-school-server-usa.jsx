import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-usa');
}

export default function NepreniaOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-usa" />;
}
