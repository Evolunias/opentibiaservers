import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-0-old-school-server');
}

export default function Tibiaorigins100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-0-old-school-server" />;
}
