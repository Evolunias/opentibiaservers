import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-98-old-school-server');
}

export default function Tibiantis1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-98-old-school-server" />;
}
