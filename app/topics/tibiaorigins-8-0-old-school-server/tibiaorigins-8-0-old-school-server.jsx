import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-0-old-school-server');
}

export default function Tibiaorigins80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-0-old-school-server" />;
}
