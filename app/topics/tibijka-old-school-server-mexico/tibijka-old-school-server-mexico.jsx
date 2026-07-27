import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-mexico');
}

export default function TibijkaOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-mexico" />;
}
