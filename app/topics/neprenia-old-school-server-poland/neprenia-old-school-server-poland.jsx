import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-poland');
}

export default function NepreniaOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-poland" />;
}
