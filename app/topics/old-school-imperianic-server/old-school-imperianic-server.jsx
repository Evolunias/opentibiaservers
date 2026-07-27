import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-server');
}

export default function OldSchoolImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-server" />;
}
