import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-sweden');
}

export default function ImperianicOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-sweden" />;
}
