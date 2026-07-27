import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-6-old-school-server');
}

export default function Tibiara86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-6-old-school-server" />;
}
