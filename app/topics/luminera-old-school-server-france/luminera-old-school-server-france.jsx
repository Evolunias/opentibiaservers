import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-france');
}

export default function LumineraOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-france" />;
}
