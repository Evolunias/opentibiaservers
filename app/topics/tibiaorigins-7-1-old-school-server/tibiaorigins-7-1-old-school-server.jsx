import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-old-school-server');
}

export default function Tibiaorigins71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-old-school-server" />;
}
