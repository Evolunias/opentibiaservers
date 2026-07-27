import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-north-america');
}

export default function CyntaraOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-north-america" />;
}
