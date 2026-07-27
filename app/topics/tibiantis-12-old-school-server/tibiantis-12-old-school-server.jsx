import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-old-school-server');
}

export default function Tibiantis12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-old-school-server" />;
}
