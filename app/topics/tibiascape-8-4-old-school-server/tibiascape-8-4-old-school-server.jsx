import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-old-school-server');
}

export default function Tibiascape84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-old-school-server" />;
}
