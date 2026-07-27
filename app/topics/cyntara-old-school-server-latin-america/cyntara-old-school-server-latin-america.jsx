import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-latin-america');
}

export default function CyntaraOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-latin-america" />;
}
