import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-old-school-server');
}

export default function Tibiantis100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-old-school-server" />;
}
