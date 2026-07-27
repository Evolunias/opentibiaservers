import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-0-old-school-server');
}

export default function Tibijka80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-0-old-school-server" />;
}
