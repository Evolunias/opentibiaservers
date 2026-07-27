import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-13-old-school-server');
}

export default function Saintsot13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-13-old-school-server" />;
}
