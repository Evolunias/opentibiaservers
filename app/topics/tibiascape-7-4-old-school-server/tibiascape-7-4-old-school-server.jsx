import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-old-school-server');
}

export default function Tibiascape74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-old-school-server" />;
}
