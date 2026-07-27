import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-72-old-school-server');
}

export default function Tibiara772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-72-old-school-server" />;
}
