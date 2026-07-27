import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-old-school-server-latin-america');
}

export default function TibiameOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-old-school-server-latin-america" />;
}
