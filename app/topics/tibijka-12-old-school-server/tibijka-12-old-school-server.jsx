import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-old-school-server');
}

export default function Tibijka12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-old-school-server" />;
}
