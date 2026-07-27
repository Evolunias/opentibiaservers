import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-old-school-server');
}

export default function Tibiame15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-old-school-server" />;
}
