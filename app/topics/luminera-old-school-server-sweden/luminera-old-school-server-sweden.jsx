import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-sweden');
}

export default function LumineraOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-sweden" />;
}
