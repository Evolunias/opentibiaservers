import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-old-school-server');
}

export default function Tibiantis13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-old-school-server" />;
}
