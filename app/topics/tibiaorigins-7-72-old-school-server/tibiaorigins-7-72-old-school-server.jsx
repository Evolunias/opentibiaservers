import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-72-old-school-server');
}

export default function Tibiaorigins772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-72-old-school-server" />;
}
