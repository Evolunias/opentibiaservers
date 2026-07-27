import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-mexico');
}

export default function TibiaretroOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-mexico" />;
}
