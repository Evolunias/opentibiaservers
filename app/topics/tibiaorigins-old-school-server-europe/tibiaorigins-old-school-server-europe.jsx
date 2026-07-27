import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-old-school-server-europe');
}

export default function TibiaoriginsOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-old-school-server-europe" />;
}
