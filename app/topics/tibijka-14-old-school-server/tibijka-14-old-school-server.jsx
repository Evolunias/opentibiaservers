import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-old-school-server');
}

export default function Tibijka14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-old-school-server" />;
}
