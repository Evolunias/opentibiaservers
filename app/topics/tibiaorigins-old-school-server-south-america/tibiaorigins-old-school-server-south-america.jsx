import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-old-school-server-south-america');
}

export default function TibiaoriginsOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-old-school-server-south-america" />;
}
