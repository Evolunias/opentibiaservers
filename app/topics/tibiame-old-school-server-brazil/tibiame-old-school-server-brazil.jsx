import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-old-school-server-brazil');
}

export default function TibiameOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-old-school-server-brazil" />;
}
