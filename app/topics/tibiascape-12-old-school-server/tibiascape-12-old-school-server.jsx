import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-old-school-server');
}

export default function Tibiascape12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-old-school-server" />;
}
