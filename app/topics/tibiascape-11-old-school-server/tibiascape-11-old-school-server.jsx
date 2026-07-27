import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-old-school-server');
}

export default function Tibiascape11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-old-school-server" />;
}
