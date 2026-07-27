import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-10-0-old-school-server');
}

export default function Saintsot100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-10-0-old-school-server" />;
}
