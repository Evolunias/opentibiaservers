import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-old-school-server');
}

export default function Realera12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-old-school-server" />;
}
