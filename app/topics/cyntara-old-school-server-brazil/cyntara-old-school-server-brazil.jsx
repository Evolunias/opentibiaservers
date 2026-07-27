import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-brazil');
}

export default function CyntaraOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-brazil" />;
}
