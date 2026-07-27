import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-france');
}

export default function TibiaretroOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-france" />;
}
