import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-france');
}

export default function TibiascapeOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-france" />;
}
