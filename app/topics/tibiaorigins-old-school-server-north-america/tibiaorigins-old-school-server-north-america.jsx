import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-old-school-server-north-america');
}

export default function TibiaoriginsOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-old-school-server-north-america" />;
}
