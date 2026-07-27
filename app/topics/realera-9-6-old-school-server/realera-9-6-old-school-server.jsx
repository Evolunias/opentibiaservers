import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-old-school-server');
}

export default function Realera96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-old-school-server" />;
}
