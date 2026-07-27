import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-old-school-server');
}

export default function Tibiame13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-old-school-server" />;
}
