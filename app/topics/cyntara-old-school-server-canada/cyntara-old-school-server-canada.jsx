import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-canada');
}

export default function CyntaraOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-canada" />;
}
