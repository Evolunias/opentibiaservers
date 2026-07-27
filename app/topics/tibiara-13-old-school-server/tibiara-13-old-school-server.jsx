import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-13-old-school-server');
}

export default function Tibiara13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-13-old-school-server" />;
}
