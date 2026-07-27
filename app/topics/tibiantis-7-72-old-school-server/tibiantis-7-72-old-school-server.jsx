import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-72-old-school-server');
}

export default function Tibiantis772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-72-old-school-server" />;
}
