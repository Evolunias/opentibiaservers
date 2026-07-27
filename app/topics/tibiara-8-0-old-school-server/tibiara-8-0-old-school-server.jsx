import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-0-old-school-server');
}

export default function Tibiara80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-0-old-school-server" />;
}
