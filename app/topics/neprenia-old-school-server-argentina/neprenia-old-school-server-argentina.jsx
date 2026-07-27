import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-argentina');
}

export default function NepreniaOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-argentina" />;
}
