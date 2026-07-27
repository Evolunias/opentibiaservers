import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-old-school-server');
}

export default function Tibiara12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-old-school-server" />;
}
