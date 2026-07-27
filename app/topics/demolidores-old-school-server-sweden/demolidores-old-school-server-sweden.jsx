import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-sweden');
}

export default function DemolidoresOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-sweden" />;
}
