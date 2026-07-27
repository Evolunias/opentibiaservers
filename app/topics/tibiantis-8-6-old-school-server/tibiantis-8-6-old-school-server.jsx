import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-6-old-school-server');
}

export default function Tibiantis86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-6-old-school-server" />;
}
