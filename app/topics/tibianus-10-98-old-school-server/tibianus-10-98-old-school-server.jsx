import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-98-old-school-server');
}

export default function Tibianus1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-98-old-school-server" />;
}
