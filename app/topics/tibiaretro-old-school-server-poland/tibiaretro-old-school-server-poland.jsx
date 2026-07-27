import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-poland');
}

export default function TibiaretroOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-poland" />;
}
