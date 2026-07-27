import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-europe');
}

export default function KasteriaOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-europe" />;
}
