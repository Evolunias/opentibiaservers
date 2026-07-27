import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-old-school-server');
}

export default function Realera15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-old-school-server" />;
}
