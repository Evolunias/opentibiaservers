import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-1-old-school-server');
}

export default function Tibiara81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-1-old-school-server" />;
}
