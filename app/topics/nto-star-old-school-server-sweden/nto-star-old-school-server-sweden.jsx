import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-sweden');
}

export default function NtoStarOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-sweden" />;
}
