import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-1-old-school-server');
}

export default function Tibiame71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-1-old-school-server" />;
}
