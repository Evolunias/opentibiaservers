import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-client');
}

export default function OldSchoolImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-client" />;
}
