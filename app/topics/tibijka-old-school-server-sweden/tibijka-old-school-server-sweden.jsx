import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-sweden');
}

export default function TibijkaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-sweden" />;
}
