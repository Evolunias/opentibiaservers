import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-uk');
}

export default function TibiaretroOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-uk" />;
}
