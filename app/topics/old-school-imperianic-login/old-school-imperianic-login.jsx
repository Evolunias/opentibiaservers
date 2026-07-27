import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-login');
}

export default function OldSchoolImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-login" />;
}
