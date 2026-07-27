import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-6-old-school-server');
}

export default function Tibiara76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-6-old-school-server" />;
}
