import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-old-school-server-sweden');
}

export default function RealestaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-old-school-server-sweden" />;
}
