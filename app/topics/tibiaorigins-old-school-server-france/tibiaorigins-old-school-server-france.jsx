import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-old-school-server-france');
}

export default function TibiaoriginsOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-old-school-server-france" />;
}
