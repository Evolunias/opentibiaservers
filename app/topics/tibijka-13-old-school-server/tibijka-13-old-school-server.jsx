import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-old-school-server');
}

export default function Tibijka13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-old-school-server" />;
}
