import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-72-old-school-server');
}

export default function Tibijka772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-72-old-school-server" />;
}
