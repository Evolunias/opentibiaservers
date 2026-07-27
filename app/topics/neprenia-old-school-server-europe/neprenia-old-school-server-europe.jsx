import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-old-school-server-europe');
}

export default function NepreniaOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-old-school-server-europe" />;
}
