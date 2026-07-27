import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-latin-america');
}

export default function TibiaretroOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-latin-america" />;
}
