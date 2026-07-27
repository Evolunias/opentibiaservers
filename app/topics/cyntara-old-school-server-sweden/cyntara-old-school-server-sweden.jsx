import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-sweden');
}

export default function CyntaraOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-sweden" />;
}
