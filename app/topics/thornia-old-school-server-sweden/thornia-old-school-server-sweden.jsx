import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-sweden');
}

export default function ThorniaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-sweden" />;
}
