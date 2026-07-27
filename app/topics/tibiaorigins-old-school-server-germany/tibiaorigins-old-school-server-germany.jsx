import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-old-school-server-germany');
}

export default function TibiaoriginsOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-old-school-server-germany" />;
}
