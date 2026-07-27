import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-6-old-school-server');
}

export default function Saintsot76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-6-old-school-server" />;
}
