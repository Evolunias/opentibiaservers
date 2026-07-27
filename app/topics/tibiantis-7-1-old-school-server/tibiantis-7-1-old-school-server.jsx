import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-old-school-server');
}

export default function Tibiantis71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-old-school-server" />;
}
