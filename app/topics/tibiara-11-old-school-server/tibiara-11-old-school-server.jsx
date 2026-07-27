import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-old-school-server');
}

export default function Tibiara11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-old-school-server" />;
}
