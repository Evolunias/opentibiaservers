import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-old-school-server');
}

export default function Tibijka76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-old-school-server" />;
}
