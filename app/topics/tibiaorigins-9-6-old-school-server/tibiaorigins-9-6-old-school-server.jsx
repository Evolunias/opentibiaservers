import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-9-6-old-school-server');
}

export default function Tibiaorigins96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-9-6-old-school-server" />;
}
