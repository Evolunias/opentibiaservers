import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-argentina');
}

export default function KasteriaOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-argentina" />;
}
