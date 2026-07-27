import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-old-school-server');
}

export default function Tibiantis15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-old-school-server" />;
}
