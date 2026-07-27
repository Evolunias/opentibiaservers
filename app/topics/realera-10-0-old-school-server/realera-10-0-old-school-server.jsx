import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-old-school-server');
}

export default function Realera100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-old-school-server" />;
}
