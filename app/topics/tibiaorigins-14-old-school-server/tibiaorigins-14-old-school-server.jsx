import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-old-school-server');
}

export default function Tibiaorigins14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-old-school-server" />;
}
