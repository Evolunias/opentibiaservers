import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-1-old-school-server');
}

export default function Saintsot81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-1-old-school-server" />;
}
