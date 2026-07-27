import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-server');
}

export default function OldSchoolTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-server" />;
}
