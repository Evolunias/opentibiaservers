import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-ot-server');
}

export default function OldSchoolTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-ot-server" />;
}
