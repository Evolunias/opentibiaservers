import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-1-old-school-server');
}

export default function Saintsot71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-1-old-school-server" />;
}
