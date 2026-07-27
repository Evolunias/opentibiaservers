import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-usa');
}

export default function TibiaraOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-usa" />;
}
