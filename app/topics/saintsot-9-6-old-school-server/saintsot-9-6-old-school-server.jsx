import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-9-6-old-school-server');
}

export default function Saintsot96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-9-6-old-school-server" />;
}
