import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-old-school-server');
}

export default function Tibijka96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-old-school-server" />;
}
