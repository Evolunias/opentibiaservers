import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-old-school-server');
}

export default function Tibiaorigins12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-old-school-server" />;
}
