import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-usa');
}

export default function TibiaretroOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-usa" />;
}
