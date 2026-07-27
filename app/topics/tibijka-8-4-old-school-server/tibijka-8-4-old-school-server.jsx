import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-4-old-school-server');
}

export default function Tibijka84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-4-old-school-server" />;
}
