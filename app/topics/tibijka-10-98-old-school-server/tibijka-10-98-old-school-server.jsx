import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-98-old-school-server');
}

export default function Tibijka1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-98-old-school-server" />;
}
