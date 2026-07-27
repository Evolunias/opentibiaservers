import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-old-school-server');
}

export default function Tibiascape13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-old-school-server" />;
}
