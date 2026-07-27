import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-old-school-server');
}

export default function Tibiara96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-old-school-server" />;
}
