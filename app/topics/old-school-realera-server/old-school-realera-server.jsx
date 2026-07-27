import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-server');
}

export default function OldSchoolRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-server" />;
}
