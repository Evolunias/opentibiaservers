import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-old-school-server');
}

export default function Tibiame14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-old-school-server" />;
}
