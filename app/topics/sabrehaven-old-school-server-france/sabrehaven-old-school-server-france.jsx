import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-old-school-server-france');
}

export default function SabrehavenOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-old-school-server-france" />;
}
