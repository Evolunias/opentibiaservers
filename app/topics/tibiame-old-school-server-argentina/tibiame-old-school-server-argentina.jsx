import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-old-school-server-argentina');
}

export default function TibiameOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-old-school-server-argentina" />;
}
