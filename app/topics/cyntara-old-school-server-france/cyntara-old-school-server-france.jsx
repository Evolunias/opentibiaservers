import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-france');
}

export default function CyntaraOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-france" />;
}
