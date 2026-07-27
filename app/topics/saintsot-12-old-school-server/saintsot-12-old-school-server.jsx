import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-old-school-server');
}

export default function Saintsot12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-old-school-server" />;
}
