import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-argentina');
}

export default function TibiaraOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-argentina" />;
}
