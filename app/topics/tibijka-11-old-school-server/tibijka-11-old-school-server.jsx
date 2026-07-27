import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-old-school-server');
}

export default function Tibijka11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-old-school-server" />;
}
