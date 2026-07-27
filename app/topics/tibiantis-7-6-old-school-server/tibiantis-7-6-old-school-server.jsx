import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-old-school-server');
}

export default function Tibiantis76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-old-school-server" />;
}
