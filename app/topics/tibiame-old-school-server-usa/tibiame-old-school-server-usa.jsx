import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-old-school-server-usa');
}

export default function TibiameOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-old-school-server-usa" />;
}
