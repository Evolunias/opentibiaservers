import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-mexico');
}

export default function KasteriaOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-mexico" />;
}
