import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-old-school-server');
}

export default function Tibiantis14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-old-school-server" />;
}
