import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-4-old-school-server');
}

export default function Saintsot84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-4-old-school-server" />;
}
