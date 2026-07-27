import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-54-old-school-server');
}

export default function Tibiaorigins854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-54-old-school-server" />;
}
