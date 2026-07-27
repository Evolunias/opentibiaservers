import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-old-school-server-canada');
}

export default function TibiaoriginsOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-old-school-server-canada" />;
}
