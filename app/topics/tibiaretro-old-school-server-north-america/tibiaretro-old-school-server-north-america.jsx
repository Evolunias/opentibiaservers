import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-north-america');
}

export default function TibiaretroOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-north-america" />;
}
