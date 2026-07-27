import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-old-school-server');
}

export default function Tibiaorigins15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-old-school-server" />;
}
