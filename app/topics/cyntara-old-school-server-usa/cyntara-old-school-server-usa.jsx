import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-usa');
}

export default function CyntaraOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-usa" />;
}
