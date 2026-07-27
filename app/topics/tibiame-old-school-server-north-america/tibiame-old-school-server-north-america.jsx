import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-old-school-server-north-america');
}

export default function TibiameOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-old-school-server-north-america" />;
}
