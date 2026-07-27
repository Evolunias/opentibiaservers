import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-usa');
}

export default function KasteriaOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-usa" />;
}
