import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-old-school-server');
}

export default function Realera13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-old-school-server" />;
}
