import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-sweden');
}

export default function NepreniaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-sweden" />;
}
