import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-old-school-server-usa');
}

export default function TibiaoriginsOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-old-school-server-usa" />;
}
