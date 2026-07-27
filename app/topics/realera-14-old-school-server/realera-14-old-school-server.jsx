import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-old-school-server');
}

export default function Realera14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-old-school-server" />;
}
