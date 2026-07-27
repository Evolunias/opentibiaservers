import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-54-old-school-server');
}

export default function Tibiascape854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-54-old-school-server" />;
}
