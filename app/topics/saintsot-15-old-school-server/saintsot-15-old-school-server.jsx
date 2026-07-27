import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-old-school-server');
}

export default function Saintsot15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-old-school-server" />;
}
