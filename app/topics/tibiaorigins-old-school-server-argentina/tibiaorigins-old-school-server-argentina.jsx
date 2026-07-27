import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-old-school-server-argentina');
}

export default function TibiaoriginsOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-old-school-server-argentina" />;
}
