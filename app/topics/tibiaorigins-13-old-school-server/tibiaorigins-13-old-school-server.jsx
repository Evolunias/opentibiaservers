import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-old-school-server');
}

export default function Tibiaorigins13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-old-school-server" />;
}
