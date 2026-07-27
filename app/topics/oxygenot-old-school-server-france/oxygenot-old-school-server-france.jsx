import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-france');
}

export default function OxygenotOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-france" />;
}
