import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-usa');
}

export default function TibijkaOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-usa" />;
}
