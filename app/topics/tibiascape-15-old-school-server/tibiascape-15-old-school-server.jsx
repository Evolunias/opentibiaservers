import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-old-school-server');
}

export default function Tibiascape15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-old-school-server" />;
}
