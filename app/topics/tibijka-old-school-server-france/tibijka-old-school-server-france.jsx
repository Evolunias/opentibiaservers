import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-france');
}

export default function TibijkaOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-france" />;
}
