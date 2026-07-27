import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-sweden');
}

export default function RealeraOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-sweden" />;
}
