import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-poland');
}

export default function KasteriaOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-poland" />;
}
