import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-france');
}

export default function TibianusOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-france" />;
}
