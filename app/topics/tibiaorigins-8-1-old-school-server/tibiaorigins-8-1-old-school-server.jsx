import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-1-old-school-server');
}

export default function Tibiaorigins81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-1-old-school-server" />;
}
