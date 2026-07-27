import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-4-old-school-server');
}

export default function Realera84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-4-old-school-server" />;
}
