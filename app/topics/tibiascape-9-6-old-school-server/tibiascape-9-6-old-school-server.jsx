import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-old-school-server');
}

export default function Tibiascape96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-old-school-server" />;
}
