import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-old-school-server-france');
}

export default function UnlineOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-old-school-server-france" />;
}
