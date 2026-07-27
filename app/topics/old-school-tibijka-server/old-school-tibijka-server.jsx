import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-server');
}

export default function OldSchoolTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-server" />;
}
