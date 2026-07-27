import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-brazil');
}

export default function TibiaraOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-brazil" />;
}
