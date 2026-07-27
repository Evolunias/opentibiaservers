import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-server');
}

export default function OldSchoolTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-server" />;
}
