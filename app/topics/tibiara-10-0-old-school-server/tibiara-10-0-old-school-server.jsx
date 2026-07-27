import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-old-school-server');
}

export default function Tibiara100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-old-school-server" />;
}
