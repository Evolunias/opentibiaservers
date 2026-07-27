import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-germany');
}

export default function NepreniaOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-germany" />;
}
