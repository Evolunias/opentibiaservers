import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-4-old-school-server');
}

export default function Tibiantis84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-4-old-school-server" />;
}
