import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-72-old-school-server');
}

export default function Tibiame772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-72-old-school-server" />;
}
