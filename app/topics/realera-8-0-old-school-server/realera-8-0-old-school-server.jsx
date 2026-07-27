import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-old-school-server');
}

export default function Realera80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-old-school-server" />;
}
