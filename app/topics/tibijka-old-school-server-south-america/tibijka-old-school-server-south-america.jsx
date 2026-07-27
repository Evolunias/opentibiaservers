import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-south-america');
}

export default function TibijkaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-south-america" />;
}
