import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-sweden');
}

export default function TibiaraOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-sweden" />;
}
