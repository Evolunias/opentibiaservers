import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-15-old-school-server');
}

export default function Tibiara15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-15-old-school-server" />;
}
