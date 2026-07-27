import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-canada');
}

export default function TibijkaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-canada" />;
}
