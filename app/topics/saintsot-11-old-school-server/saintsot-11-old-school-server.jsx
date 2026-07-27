import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-old-school-server');
}

export default function Saintsot11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-old-school-server" />;
}
