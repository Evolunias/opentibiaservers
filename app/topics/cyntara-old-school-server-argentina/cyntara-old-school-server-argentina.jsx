import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-argentina');
}

export default function CyntaraOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-argentina" />;
}
