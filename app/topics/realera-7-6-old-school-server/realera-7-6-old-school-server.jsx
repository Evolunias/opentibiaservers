import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-old-school-server');
}

export default function Realera76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-old-school-server" />;
}
