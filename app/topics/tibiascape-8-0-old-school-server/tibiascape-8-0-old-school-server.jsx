import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-0-old-school-server');
}

export default function Tibiascape80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-0-old-school-server" />;
}
