import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-old-school-server');
}

export default function Tibiantis11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-old-school-server" />;
}
