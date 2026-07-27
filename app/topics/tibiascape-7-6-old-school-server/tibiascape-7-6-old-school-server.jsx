import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-old-school-server');
}

export default function Tibiascape76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-old-school-server" />;
}
