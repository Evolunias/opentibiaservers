import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-private-server');
}

export default function OldSchoolTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-private-server" />;
}
