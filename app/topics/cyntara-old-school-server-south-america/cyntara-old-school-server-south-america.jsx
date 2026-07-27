import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-south-america');
}

export default function CyntaraOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-south-america" />;
}
