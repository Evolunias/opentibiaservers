import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-sweden');
}

export default function NostaltherOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-sweden" />;
}
