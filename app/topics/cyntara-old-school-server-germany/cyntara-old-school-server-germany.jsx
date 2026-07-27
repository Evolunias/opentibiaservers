import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-germany');
}

export default function CyntaraOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-germany" />;
}
