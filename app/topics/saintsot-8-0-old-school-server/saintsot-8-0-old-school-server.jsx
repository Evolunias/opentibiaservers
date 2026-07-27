import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-0-old-school-server');
}

export default function Saintsot80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-0-old-school-server" />;
}
